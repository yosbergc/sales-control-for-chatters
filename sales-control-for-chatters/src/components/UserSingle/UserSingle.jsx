import './UserSingle.css'
import { totalSales } from "../../utils/totalSales"
function UserSingle({name, estado, role, sales}) {
    const salesToday = totalSales(sales.filter((sale) => moment(sale.SecretDate).isSame(moment(), "day")));
    return (<tr className="usersingleInformation">
        <td>{name}</td>
        <td><p className='role'>{role}</p></td>
        <td>{estado ? <p className='activo'>Activo</p> : <p className='inactivo'>Inactivo</p>}</td>
        <td>{salesToday}$</td>
    </tr>)
}
export { UserSingle }