export default function({fields}){

    return(
        <div className="sidebar" >
            <h2>Components</h2>
            <ul>
                {Object.keys(fields).map((field, index) => (
                   <a href={`#${field.toLowerCase()}`} key={index}> <li>{field}</li></a>
                ))}
            </ul>
        </div>
    )
}