interface ImageProp {
    image: string
    rectangle?: boolean
    end? : boolean
}

const Logo: React.FC<ImageProp> = ({image, rectangle, end}) => {


    return (
        <div style={{padding: 10, marginRight: !end ? '3rem': 0}}>
            <img style={{width: rectangle ? '4rem': '5rem', height: '5rem'}} src={image} />
        </div>
    );
}

export default Logo;