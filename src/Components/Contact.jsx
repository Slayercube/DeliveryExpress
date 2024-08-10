import styles from './Contact.module.css'


const Contact = () => {

return (
<div className={styles.main_frame}>
    <div className="frame_top">
        <h1>Contact</h1>
        <p>Please fill in the form below, we will do our best to get back to you at the soonest convinient time.</p>
    </div>

    <form action="">
        <div className={styles.top_line}>
            <div className={styles.firstlastname}>
                <label for="exampleInputEmail1" className="form-label">First Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className={styles.firstlastname}>
                <label for="exampleInputEmail1" className="form-label">Last Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
        </div>
        <div className={styles.mid_line}>
            <div className={styles.emailclass}>
                <label for="exampleInputEmail1" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
        </div>
        <div className={styles.bottom_line}>
            <div className={styles.emailclass}>
                <label for="exampleInputEmail1" className="form-label">Phone</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked="true"></input>
                <label className="form-check-label" for="exampleCheck1">Receive news letter.</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
            


    </form>
</div>
    )
}

export default Contact;