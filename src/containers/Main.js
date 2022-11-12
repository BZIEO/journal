import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryForm from "../components/DiaryForm";
import { addItem, deleteItem } from "../redux/actions";
import DiaryItems from "../components/DiaryItems";
import { Modal } from "react-bootstrap";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      activeItem: null
    }
  }
  render() {
    const { addItem, diaryItems, deleteItem } = this.props;
    const { show, activeItem } = this.state
    return (
     <div>
       <div className="grid-container">
        <div className="diary-app">
          <h1>Dear diary...</h1>
          <DiaryForm  addItem={(item) => addItem(item)}/>
        </div>
        <div className="diary-app" style={{ paddingTop: 20}}>
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => {
                return <DiaryItems  deleteItem={(id) => deleteItem(id)}  showModal= {(item) => this.setState({show: true, activeItem: item})} item={item}/>
               }) 
              ) : (
              <h1>No items</h1>
            )}
        </div>
      </div>
       <Modal
       size="lg"
       show={show}
       onHide={() => this.setState({show: false})}
       aria-labelledby="example-modal-sizes-title-lg"
     >
       <Modal.Header closeButton>
         <Modal.Title id="example-modal-sizes-title-lg">
         {activeItem?.title}
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
        {activeItem?.text}
       </Modal.Body>
       <Modal.Footer>
        {activeItem?.date}
       </Modal.Footer>
     </Modal>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    diaryItems: state.diaryItems,
  });
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (id) => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
