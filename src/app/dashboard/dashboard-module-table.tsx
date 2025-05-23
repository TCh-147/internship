type Props = {
    title: string
}

const ModuleTopRow = ({title}: Props) => {
    return(
        <>
            <div className="p-4">{title}</div>
        </>
    )
}

export default ModuleTopRow