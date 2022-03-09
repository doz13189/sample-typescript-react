import { VFC } from "react"
import { UserProfile } from "./types/userProfile"

type Props = {
    user: UserProfile
}

export const UserCard: VFC<Props> = (props) => {

    const { user } = props

    const style = {
        border: 'solid 1px #ccc',
        borderRadius: '8px',
        padding: '0 16px',
        margin: '8px'
    }

    return (
        <div style={style}>

            <dl>name</dl>
            <dt>{ user.name }</dt>

            <dl>mail</dl>
            <dt>{ user.email }</dt>

            <dl>address</dl>
            <dt>{ user.address }</dt>

        </div>
    )
}