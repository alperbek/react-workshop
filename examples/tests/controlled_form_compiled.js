var MyForm = React.createClass({displayName: "MyForm",
    onSubmit: function () {
        console.log("the form values are", this.state.name);

    },
    getInitialState: function () {
        return {name: '', card: ''};
    },

    changeName: function (e) {
        this.setState({name: e.target.value});

    },

    changePhone: function (e) {
        if (/^\d+$/.test(e.target.value) || e.target.value === "") {
            this.setState({card: e.target.value});
        }
    },

    render: function () {
        var maleNames = ["John", "George"];
        var femaleNames = ["Mary", "Jane"];
        var isMale = maleNames.indexOf(this.state.name) > -1;
        var isFemale = femaleNames.indexOf(this.state.name) > -1;

        var genderPrefix = "";
        if (isMale) {
            genderPrefix = "Mr. ";
        }

        if (isFemale) {
            genderPrefix = "Ms. ";
        }



        return React.createElement("form", {onSubmit: this.onSubmit}, 
        React.createElement("input", {onChange: this.changeName, value: this.state.name, placeholder: "What is your name?"}), 
        React.createElement("input", {onChange: this.changeCard, value: this.state.card, placeholder: "What is your name?"}), 

        this.state.name && ("Hello " + genderPrefix + this.state.name)
        )

    }


})


    React.render(React.createElement(MyForm, null), document.body);
