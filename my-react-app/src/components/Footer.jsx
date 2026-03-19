export default function Footer(ob){

    return (
        <footer>
            <p>{ob.year[1]}  {ob.company.location}</p>
        </footer>
    )
}