const Area = ({ title, image }) => {
    return (
        <div className={'bg-blue-300 h-24 rounded-md shadow-md flex items-center justify-center'}>
            <h3 className={'font-bold text-md'}>{title}</h3>
        </div>
    )
}

export default Area
