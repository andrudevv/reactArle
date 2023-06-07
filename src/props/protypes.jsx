//protypes


import {PropTypes} from "prop-types";
// const firstApp = ({tittle, subtitle})=>{
//     return (
//         <>
//         <h1>{tittle}</h1>
//         <h2>{subtitle}</h2>
//         </>
//     )

// }

// firstApp.propTypes = {
//     tittle: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired
// }

const FirstApp = ({tittle, subTitle, subT2})=>{
    return (
        <>
        <h1>{tittle}</h1>
        <h2>{subTitle}</h2>
        <h2>{subT2}</h2>
        </>
    )
}

FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    subT2: PropTypes.string.isRequired
}

FirstApp.defaultProps={
    subT2 : "no hay sub titulo 2"
}

export default function AppFirst() {
    return(
        <FirstApp tittle="tema: React" subtitle={32}/>
    )
}

