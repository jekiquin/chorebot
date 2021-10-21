import uniqid from 'uniqid';

function Instructions() {
    const instructions = [
        'Hiding behind one of these doors is the killer.',
        'Your mission is to open all of the doors without running into the killer.',
        'If you manage to open the doors without getting into the killer, you win!',
        'See if you can score a winning streak'
    ]

    const displayInstructions = () => {
        return instructions.map((instruction, index) => {
            return (
                <tr key={uniqid()}>
                    <td>{index + 1}</td>
                    <td>{instruction}</td>
                </tr>
            )
        })
    }

    return(
        <section>
            <h2>Instructions</h2>
            <table>
                {displayInstructions()}
            </table>
        </section>
    )
}

export default Instructions;