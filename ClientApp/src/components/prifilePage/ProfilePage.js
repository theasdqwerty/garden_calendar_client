import style from './profilePage.module.css'
import {ProfileMenu} from "./profileMenu/ProfileMenu";

export const ProfilePage = ({children}) => {
    return (
        <section className={style.section}>
            <ProfileMenu/>
            <div className={style.main}>
                {children}
            </div>
        </section>
    )
}