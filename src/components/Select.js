import React from 'react';
import Option from './Option'

class Select extends React.Component {
    render() {
        return (
            <select onChange={(e) => this.props.onSelectChange(e)} defaultValue='Select Location'>
               {console.log(this.props.options[0]? this.props.options[0].name : '')}
                {
                
                this.props.options.map(option => <Option
                    option={option.name}
                    key={option.dealers_id ? option.dealers_id : option.branch_id }
                    id={option.dealers_id ? option.dealers_id : option.branch_id } />)}
            </select>
        )

    }
}
export default Select