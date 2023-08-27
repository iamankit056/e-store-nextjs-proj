import style from './page.module.scss';

function Button({
    children,
    ...args
}) {
  return (
    <button className={style.button} {...args}>{children}</button>
  )
}

export default Button