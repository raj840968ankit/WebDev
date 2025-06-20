

export const Faq = ({ data, onToggle, activeID }) => {
    const { question, answer } = data
    
    return (
        <li>
            <div className='accordion-grid'>
                <p>{question}</p>
                <button 
                    onClick={onToggle} 
                    className={activeID ? 'active-btn' : ""}
                >
                    {activeID ? 'CLOSE' : 'SHOW'}
                </button>
            </div>
            <p>{activeID && answer}</p>
        </li>
    )
}