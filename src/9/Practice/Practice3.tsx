export const Practice3 = () => {

    const calcTotalFee = (num: number): number => {
        return num * 1.1
    }

    const onClickPractice = () => { 
        const result: number = calcTotalFee(1200)
        console.log(result)
    }

    return (
        <div>
            <p>practice : variable type</p>
            <button onClick={onClickPractice}>execute</button>
        </div>
    )
}