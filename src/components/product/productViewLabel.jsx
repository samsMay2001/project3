export const ProductViewLabel = ({txt, Icon}) => {
    return (
        <div className='productView-label'>
            <div>{txt}</div>
            <Icon fontSize='small'/>
        </div>
    )
}