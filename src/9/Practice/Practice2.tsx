export const Practice2 = () => {

    const calcTotalFee = (num: number): void => {
        const total = num * 1.1
        console.log(total)
    }

    const onClickPractice = () => calcTotalFee(1200)

    return (
        <div>
            <p>practice : multiple argment</p>
            <button onClick={onClickPractice}>execute</button>
        </div>
    )
}