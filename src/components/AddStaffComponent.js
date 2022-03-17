import React, {Component} from 'react';
import { Button, Input, Label, Modal, Row, Col, Form, FormGroup, FormFeedback, ModalHeader, ModalBody } from 'reactstrap';

class AddStaff extends Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
            image: '/assets/images/alberto.png',
            isOpenModal: false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleAddStaff=this.handleAddStaff.bind(this);
    }

    toggleModal(){
        this.setState({isOpenModal:!this.state.isOpenModal});
    }

    handleInputChange(event){
        const value=event.target.value;
        const name=event.target.name;
        this.setState({[name]:value});
    }

    handleAddStaff(e){
        e.preventDefault();
        const newStaff={
            id: this.props.staffs.length,
            name: this.state.name,
            doB: this.state.doB,
            salaryScale: this.state.salaryScale,
            startDate: this.state.startDate,
            department: this.state.department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            image: this.state.image
            
        }
        this.toggleModal();
        this.props.handleAddStaff(newStaff);
    }

    render(){
        return(
            <React.Fragment>
                <Button onClick={this.toggleModal} color='info' className="addButton">
                    <span className='fa fa-plus'></span>
                </Button>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleAddStaff}>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="name" md={4}>Họ và tên</Label>
                                    <Col md={8}>
                                        <Input type='text' id='name' name='name' 
                                        value={this.state.name} 
                                        onChange={this.handleInputChange}/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                    <Col md={8}>
                                        <Input type='date' id='doB' name='doB' 
                                        value={this.state.doB} 
                                        onChange={this.handleInputChange} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                    <Col md={8}>
                                        <Input type='date' id='startDate' name='startDate' 
                                        value={this.state.startDate}
                                        onChange={this.handleInputChange} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="department" md={4}>Phòng ban</Label>
                                    <Col md={8}>
                                        <Input type='select' id='department' name='department' 
                                        value={this.state.doB} 
                                        onChange={this.handleInputChange} >
                                            <option value='' disabled>Select Department</option>
                                            <option value='Dep01'>Sale</option>
                                            <option value='Dep02'>HR</option>
                                            <option value='Dep03'>Marketing</option>
                                            <option value='Dep04'>IT</option>
                                            <option value='Dep05'>Finance</option>

                                        </Input>   
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                    <Col md={8}>
                                        <Input type='text' id='salaryScale' name='salaryScale' 
                                        value={this.state.salaryScale} 
                                        onChange={this.handleInputChange}/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                    <Col md={8}>
                                        <Input type='text' id='annualLeave' name='annualLeave' 
                                        value={this.state.annualLeave} 
                                        onChange={this.handleInputChange} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                    <Col md={8}>
                                        <Input type='text' id='overTime' name='overTime' 
                                        value={this.state.overTime}
                                        onChange={this.handleInputChange} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button type="submit" color="info">Thêm</Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </React.Fragment>
        )

    }
}
export default AddStaff;