import React, { Component } from "react";
import { Card, List, Avatar } from "antd";
import { Link } from "react-router-dom";

class UserList extends Component {
    render () {
        let {loading, title, data} = this.props;
        return (<Card
            loading={loading}
            title={title}
            type="inner"
        >
            <List
                className="userList"
                dataSource={data}
                renderItem={(item)=>(
                    <List.Item key={item.id} style={{
                        position: "relative"
                    }}>
                        <Avatar src={item.author.avatar_url} />
                        <Link to={"/user/"+item.author.loginname}
                            className="userName"
                        >
                            {item.author.loginname}
                        </Link>
                        <h4 style={{
                            display: "inline-block"
                        }}>
                            <Link to={"/details/"+item.id}>{item.title}</Link>
                        </h4>
                        <time style={{
                            position: "absolute",
                            right: 0,
                            top: "12px"
                        }}>
                            最后回复时间:{item.last_reply_at.split("T")[0]}
                        </time>
                    </List.Item>
                )}
            >

            </List>
        </Card>);
    }
}

export default UserList;