import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required/>
        <input type="email" placeholder="email" name="email" required/>
        <input type="password" placeholder="password" name="password" required/>
        <input type="phone" placeholder="phone" name="phone" required/>
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin ?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="number" placeholder="price" name="price"/>
        <input type="number" placeholder="stock" name="stock"/>
        <input type="text" placeholder="color" name="color"/>
        <input type="text" placeholder="size" name="size"/>
        <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
