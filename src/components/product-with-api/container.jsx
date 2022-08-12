import { useState } from "react";
import ProductInfo from "./productInfo";
import ProductList from "./productList";
import { product, emptyProduct, categories } from "../globalData/initialData";
import { v4 as uuidv4 } from "uuid";
import PageTitle from "../custom-component/PageTitle";
import { Toast,ToastBody } from "reactstrap";

const Container = () => {
  const [items, setitems] = useState(product);
  const [selectedItem, setSelectedItem] = useState(emptyProduct);
  const [alert, setAlert] = useState(false);

  const onShowAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const saveItem = (item) => {
    const category = categories.find((p) => p.id == item.categoryId);
    item = { ...item, categoryName: category.title, editMode: false };
    if (item.id != "") {
      // edit
      const temp = [...items];
      const index = temp.findIndex((p) => p.id == item.id);
      temp[index] = item;
      setitems([...temp]);
    } else {
      // add
      item.id = uuidv4();
      const temp = [...items, item];
      setitems([...temp]);
    }
    setSelectedItem({ ...emptyProduct });
  };

  const setEditeMode = (id) => {
    const temp = [...items];
    const index = temp.findIndex((p) => p.id == id);
    temp.forEach((p) => (p.editMode = false));
    temp[index].editMode = true;
    setSelectedItem(temp[index]);
    setitems([...temp]);
  };

  const removeItem = (id) => {
    setitems([...items.filter((p) => p.id != id)]);
    onShowAlert();
  };

  return (
    <>
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999,  }}>
            <Toast  isOpen={alert} fade="true" className="p-2 bg-warning my-3">
                <ToastBody>
                    محصول با موفقیت حذف شد!
                </ToastBody>
            </Toast>
      </div>
      
      <PageTitle title=" مدیریت محصولات" />
      <div className="countainer ">
        <div className="card">
          <div className="card-header">مدیریت محصولات</div>
          <div className="card-body">
            <div className="row">
            
              <div className="col-md-12">
                <ProductList
                  data={items}
                  remove={removeItem}
                  editeMode={setEditeMode}
                />
                <hr className="mt-4"/>
              </div>

              <div className="col-md-6 ">
                <ProductInfo
                  categories={categories}
                  save={saveItem}
                  product={selectedItem}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Container;
