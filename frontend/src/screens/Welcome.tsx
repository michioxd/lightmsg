import Input from "../components/Input";
import cls from "./Welcome.module.scss";

export default function ScreenWelcome() {
    return (
        <div className={cls.Welcome}>
            <div className={cls.Content}>
                <h3>welcome to lightmsg</h3>
                <small>lightweight free to chat</small>
                <br />
                <Input style={{ width: '240px' }} placeholder="Enter username" />
                <a className={cls.start} href="#">let's start</a>
                <br />
                <a className={cls.forkMe} href="http://github.com/michioxd/lightmsg">fork me on github</a>
            </div>
        </div>
    )
}