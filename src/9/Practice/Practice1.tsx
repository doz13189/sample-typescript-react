export const Practice1 = () => {

    const getTotalFee = (num: number): number => {
        return num * 1.1
    }

    const onClickPractice = () => getTotalFee(1200)

    return (
        <div>
            <p>practice : return value type</p>
            <button onClick={onClickPractice}>execute</button>
        </div>
    )
}