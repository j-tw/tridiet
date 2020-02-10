// react is the base class within which everything is defined.
// react-native holds components that can be used in react.
// component is something defined within react that is not the
// default export so should be addressed by name.
import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';

// classes are not hoisted, meaning they must be declared before
// they are used (unlike functions, which can be declared after
// they are used like in C#
// so treat them like in C++
class SplashMessage extends Component {
  // this should take in prop appname that returns a text
  // component containing the app name
  // note: to insert javascript into JSX, can be done 
  // anywhere with curly braces.
  // also note: props that don't have subprops should be variables
  // themselves (see use in HelloWorldApp)
  render() {
    return <Text >Welcome to {this.props.appName}.</Text>
  }
}

class ChangingMessage extends Component {

  // called right after render in a hierarchy of four things
  // (constructor, getDerivedStateFromProps, render, 
  // componentDidMount)
  // when a component is created and inserted into the tree
  // , it is mounted.
  componentDidMount() {
    // parentheses aroung the return is shorthand to return an object
    setTimeout(() => this.setState(oldState => ({isRed: !oldState.isRed})), 3000);
  }
  

  state = { isRed:false };

  render() {
    // note: can return null to render nothing
    return (
      <Text style={{color: this.state.isRed ? 'red' : 'black'}}>This text changes color! Look at it go!</Text>
    );
  }
}


class TextEcho extends Component {
  constructor(props) {
    super(props);
  }

  render() {

  }
}

// helloworldapp exported by default (under any name) and derives component, a basic thing that can be rendered and must have render() as a method
export default class HelloWorldApp extends Component {

  // note how methods don't need any qualifiers.
  // returns the marked-up syntax to display
  //
  // **********PROPS********** 
  // props are properties passed into a component.
  // accessible under the implicit property props in class (under 'this'!)
  // to pass props into a component, pass a name and a javascript object {var1: val1, etc} inside curly braces. If done inline, double curly braces should result.
  // ex: propName={{obj1:true}}
  // props will appear in that object under the name supplied.  
  // allow for the customization of objects in react.
  // set by parent, fixed throughout component lifetime
  //
  // **********STATE**********  
  // other variable held within a component-derived class, presumably
  // introduced within Component itself.
  // unlike props, can change data contained.
  // simply contains variables that are going to change.
  // initialize in constructor and then always update with setState()
  // function to cause React to update its component hierarchy and sync
  // with native view.
  // they always create the state with an object, though.
  // continue this later.
  //
  // **********VIEWCONTROLLER LAYOUT********** 
  // can resize things based on either fixed width (density-independent
  // pixels) or use flex (in which components take up relative amounts
  // of space based on the flex
  // flex must have parent with flex dimensions greater than 0 or height
  // or width dimensions defined to actually expand or else parent will
  // be dimensionless and unable to expand
  // FLEX DIMENSIONS DEFAULT TO COLUMN HERE INSTEAD OF ROW AS IN CSS
  

  render() {
    return (
      // views are essentially divs, control layout.
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {/*Note: appName isn't an object as used in SplashMessage so
          * can be passed in as variable/string itself. */}
        <SplashMessage appName='Tridiet'/>
        <ChangingMessage ></ChangingMessage>
        <Image source={{uri:'https://icons.iconarchive.com/icons/alex-t/minimal-fruit/1024/apple-icon.png'}} style={{width:100,height:100}}/>
      </View>
    )
  }
}