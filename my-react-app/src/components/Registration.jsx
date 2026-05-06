import "./Header.css"

export default function Registration() {
    return(
        <form action="onSubmit" className="form-style">
            <label>Name - </label>
            <input type="text" placeholder="Enter Name" />
            <label>Age - </label>
            <input type="number" placeholder="Enter Name" max={100} />
            <label>Gmail Id - </label>
            <input type="gmail" placeholder="Enter your gmail id"/>

            <button>submit</button>
        </form>
    )
}