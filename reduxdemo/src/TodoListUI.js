import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import "antd/dist/antd.css"

class TodoListUI extends Component {
   
    render() { 
        return ( 
            <div style={{margin:"10px"}}>
                <div>
                    <Input 
                        placeholder={this.props.inputValue}
                        style={{width:"250px", marginRight:"10px"}}
                        onChange={this.props.onChangeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button 
                        type="primary"
                        onClick={this.props.onAddClick}
                    >增加</Button>
                </div>
                <div style={{margin:"10px", width:"300px"}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index)=>(
                            <List.Item
                                onClick={() => {
                                    this.props.onDeleteItem(index)
                                }}
                            >
                                {item}
                            </List.Item>
                        )}
                    ></List>
                </div>
            </div>
         );
    }
}
 
export default TodoListUI;