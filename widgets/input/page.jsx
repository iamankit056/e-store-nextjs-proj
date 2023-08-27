import style from './page.module.scss';

function Input({
    children,
    type='text',
    name,
    value,
    setValue,
    width='100%',
    options,
    ...args
}) {

    const handleChange = (e) => {
        setValue((state) => {
            return ({
                ...state,
                [name]: e.target.value
            })
        })
    }

    if(type == 'textarea') {
        return (
            <div className={style.container} style={{width: width}}>
                <label>{children}</label>
                <textarea 
                    name={name} 
                    value={value}
                    onChange={handleChange}  
                    {...args}>
                </textarea>
            </div>
        )
    }
    
    if(type == 'select') {
        return (
            <div className={style.container} style={{width: width}}>
                <label>{children}</label>
                <select 
                    name={name} 
                    onChange={handleChange}>
                    <option value="None">select here</option>
                    {options.map((option, index) => {
                        return(
                            <option key={index} value={index}>{option}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
    
    if(type == 'checkbox' || type == 'checkbox') {
        return (
            <label className={style.container}>
                <input 
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    {...args}/>
                <span>{children}</span>
            </label>
        )
    }

    return (
        <div className={style.container} style={{width: width}}>
            <label>{children}</label>
            <input 
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                className={style.input}
                {...args}/>
        </div>
    )
}

export default Input