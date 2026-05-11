export default function TabButton({children, onSelect}){
    console.log('Tab Component Executing')
    return <li>
        <button onClick={onSelect}>{children}</button>
    </li>
}