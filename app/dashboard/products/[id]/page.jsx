import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill/>
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label>Title</label>
        <input type="text" name="title" placeholder="John Doe"/>
        <label>Price</label>
        <input type="number" name="price" placeholder="JohnDoe@gmail.com"/>
        <label>Stock</label>
        <input type="number" name="stock" placeholder="23"/>
        <label>Color</label>
        <input type="text" name="phone" placeholder="+90 1907 1907 1907 1907 1907"/>
        <label>Size</label>
        <textarea type="text" name="size" placeholder="New York"/>
        <label>Cat</label>
        <select name="cat" id="cat">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
        </select>
        <label>Description</label>
        <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
