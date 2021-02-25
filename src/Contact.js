import React, {Component} from 'react';
import axios from "axios";
class Contact extends Component {
   constructor() {
        super();
        this.state = {
            fname:'',
            lname:'',
            email:'',
            subject:'',
            message:'',
            send:false
        }
       this.handlfname=(e)=>{
        this.setState({
            fname:e.target.value
        })
        }
       this.handllname=(e)=>{
           this.setState({
               lname:e.target.value
           })
       }
       this.handlemail=(e)=>{
           this.setState({
               email:e.target.value
           })
       }
       this.handlsubject=(e)=>{
           this.setState({
               subject:e.target.value
           })
       }
       this.handlmessage=(e)=>{
           this.setState({
               message:e.target.value
           })
       }
       this.formsubmit=(e)=>{
            e.preventDefault()
            let data={
                fname:this.state.fname,
                lname: this.state.lname,
                email:this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }
          //  console.log(data)
            axios.post("/api/form",data)
                .then(res=>{
                    this.setState({
                        send: true,
                    },this.resetForm())
                    }).catch(()=>{
                        console.log("message not send")

                })
           this.resetForm=()=>{
                this.setState({
                    fname:'',
                    lname:'',
                    email:'',
                    subject:'',
                    message:''
                })
               setTimeout(()=>{
                   this.setState({
                       send:false
                   },3000)
               })
           }

       }
   }



    render() {

        return (
            <div>
                <div id="contact" className="contact segments">
                    <div className="container">
                        <div className="box-content">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="content-left">
                                        <div className="section-title section-title-left">
                                            <h3>Contact Me</h3>
                                        </div>
                                        <h2>Realize your dream with us</h2>
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fab fa-google"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="content-right">
                                        <form onSubmit={this.formsubmit} className="contact-form" id="contact-form"
                                              method="post">
                                            <div className="row">
                                                <div className="col">
                                                    <div id="first-name-field">
                                                        <input type="text" placeholder="First Name"
                                                               className="form-control" name="form-name"
                                                        value={this.state.fname}
                                                               onChange={this.handlfname}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div id="last-name-field">
                                                        <input type="text" placeholder="Last Name"
                                                               className="form-control" name="form-name"
                                                        value={this.state.lname}
                                                               onChange={this.handllname}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div id="email-field">
                                                        <input type="email" placeholder="Email Address"
                                                               className="form-control" name="form-email"
                                                               value={this.state.email}
                                                               onChange={this.handlemail}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div id="subject-field">
                                                        <input type="text" placeholder="Subject"
                                                               className="form-control" name="form-subject"
                                                               value={this.state.subject}
                                                               onChange={this.handlsubject}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div id="message-field">
                                                        <textarea cols="30" rows="5" className="form-control"
                                                                  id="form-message" name="form-message"
                                                                  placeholder="Message"
                                                                  value={this.state.message}
                                                                  onChange={this.handlmessage}
                                                        ></textarea>

                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button" type="submit" id="submit" name="submit">Send
                                                Message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    }

    export default Contact;