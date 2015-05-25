var MyForm = React.createClass({displayName: "MyForm",

    onSubmit: function (e) {
        debugger
        e.preventDefault();
        var name = React.findDOMNode(this.refs.name).value;
        var surname = React.findDOMNode(this.refs.surname).value;
        var comment = React.findDOMNode(this.refs.comment).value;
        var fromDenmark = React.findDOMNode(this.refs.fromDenmark).checked;

        var gender = React.findDOMNode(this.refs.gender).value;
        var male = React.findDOMNode(this.refs.male).selected;
        var female = React.findDOMNode(this.refs.female).selected;


        console.log("Form submitted with the following values", name, surname, comment, fromDenmark, gender, male, female);


    },

    render: function () {

        return React.createElement("form", {onSubmit: this.onSubmit}, 
        React.createElement("input", {ref: "name", placeholder: "What is your name"}), 
        React.createElement("input", {ref: "surname", placeholder: "What is your surname?"}), 
        React.createElement("textarea", {ref: "comment", placeholder: "Comment"}), 
        React.createElement("label", null, React.createElement("input", {ref: "fromDenmark", type: "checkbox"}), "Are you from Denmark?"), 
        React.createElement("label", null, "Gender:", 
        React.createElement("select", {ref: "gender"}, 
        React.createElement("option", {ref: "male"}, "Male"), 
        React.createElement("option", {ref: "female"}, "Female")
        )), 
        React.createElement("button", {type: "submit"}, "Submit")

        )


    }


});

React.render(React.createElement(MyForm, null), document.body);
