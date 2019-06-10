import React from "react"

const withAuth = WrappedComp1 => WrappedComp2 => {
    return class extends React.Component {
            state ={
                isLoggedIn: false,
            }

            componentDidMount() {
                const isLoggedIn = !!localStorage.getItem('username')
                this.setState({isLoggedIn});
            }

        render () {
            // Send to Post page
            if (this.state.isLoggedIn){
                return (
                    <WrappedComp1 {...this.props} />
                )
            }
            return (
                // Send to login page
                <WrappedComp2 />
            );
        }
    }
}

export default withAuth;