import axios from "axios"
import { useState } from "react"
import { User } from "../types/api/user"
import { UserProfile } from "../types/userProfile"

// get all user
export const useAllUser = () => {
    
    const [ userProfiles, setUserProfiles ] = useState<UserProfile[]>([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    const getUsers = () => {
        setLoading(true)
        setError(false)
    
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            const data = res.data.map((user: User) => ({
                id: user.id,
                name: `${user.name}(${user.username})`,
                email: user.email,
                address: user.address.city
            }))
    
            setUserProfiles(data)
          })
          .catch(() => {
            setError(true)
          })
          .finally(() => {
            setLoading(false)
          })
    }

    return {
        getUsers,
        userProfiles,
        loading,
        error
    }
}
