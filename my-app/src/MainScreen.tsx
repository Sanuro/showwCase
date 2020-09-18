import React, { Component } from 'react';
import './MainScreen.css';
import Modal from 'react-modal';


// Modal.setAppElement("#root");
interface College {
  fieldStudy: string,
  degree: string,
  sYear: string,
  eYear: string,
  grade: string,
  description: string,
  sName: string,
  option: string,
}

export class MainScreen extends Component<{ name: string }, { isOpen: boolean, modalIsOpen: boolean, sName: string, degree: string, fStudy: string, sYear: string, eYear: string, grade: string, option: string, dField: string, my_colleges: College[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      modalIsOpen: false,
      isOpen: false,
      sName: '',
      degree: '',
      fStudy: '',
      sYear: '',
      eYear: '',
      grade: '',
      dField: '',
      option: '',
      my_colleges: [],
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = { buttonPressed: false, value: '' };
    // this.changeScreen = this.changeScreen.bind(this);
  }
  toggleModal() {
    var opposite_val = !(this.state.isOpen);
    this.setState({ isOpen: opposite_val });
  }
  handleChange(evt: any) {
    this.setState({ [evt.target.name]: evt.target.value } as any);
  }
  handleSubmit() {
    var opposite_val = !(this.state.isOpen);
    this.setState({ isOpen: opposite_val });
    const college_modal: College = {
      fieldStudy: this.state.fStudy,
      degree: this.state.degree,
      sYear: this.state.sYear,
      eYear: this.state.eYear,
      grade: this.state.grade,
      description: this.state.dField,
      option: this.state.option,
      sName: this.state.sName
    };
    this.setState({
      my_colleges: [...this.state.my_colleges, college_modal],
      sName: '',
      degree: '',
      fStudy: '',
      sYear: '',
      eYear: '',
      grade: '',
      dField: '',
      option: '',
    })

  }
  render() {
    return (
      <div>
        <p>Welcome to {this.props.name}'s education page
        </p>
        <div id="button"><a onClick={this.toggleModal}>Enter</a></div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleModal}
          contentLabel="My dialog"
        >
          <div>
            <form>
              <input type="text" id="schoolName" name="sName" placeholder="School Name" onChange={this.handleChange}></input><br></br>
              <input type="text" id="degree" name="degree" placeholder="Degree" onChange={this.handleChange}></input><br></br>
              <input type="text" id="fieldStudy" name="fStudy" placeholder="Field of Study" onChange={this.handleChange}></input><br></br>
              <input type="text" id="startYear" name="sYear" placeholder="Start Year" onChange={this.handleChange}></input><br></br>
              <input type="text" id="endYear" name="eYear" placeholder="End Year" onChange={this.handleChange}></input><br></br>
              <input type="text" id="grade" name="grade" placeholder="Grade" onChange={this.handleChange}></input><br></br>
              <input type="text" id="descField" name="dField" placeholder="Description Field" onChange={this.handleChange}></input><br></br>
              <input type="text" id="optional" name="option" placeholder="Optional" onChange={this.handleChange}></input><br></br>
              <button onClick={this.handleSubmit}>Submit</button>
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>

          <button onClick={this.toggleModal}>Close modal</button>
        </Modal>
        <div id="leftBox">
          hello left
        </div>
        <div id="browse_college"></div>
        <div id="rightBox">
          {/* hello right */}
          <div id="topRight">
            {this.state.my_colleges.map(college => (
              <div>
                <p>College: {college.sName}</p>
                <p>Degree: {college.degree}</p> <p>Year: {college.sYear}</p> <p>{college.eYear}</p>
                <p>Grade: {college.grade}</p>
                <p>Description: {college.description}</p>
                <p>Optional: {college.option}</p>
              </div>
            ))}

          </div>
          <div id="botRight">
            empty box
          </div>
        </div>
      </div>
    )
  }

}