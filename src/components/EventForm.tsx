import React, { FC } from "react";
import { Button, Form, Input, Row, DatePicker, Select } from "antd";
import { useState } from "react";
import { IEvent } from "../models/IEvent";
import { IUser } from "../models/IUser";
import { formatDate, getMounth, getDay, getYear } from "../utils/date";
import { useTypedSelector } from "../hooks/useTypedSelector";
import moment, { Moment } from "moment";

interface eventProps {
    guests: IUser[]
    submit: (event: IEvent) => void
}

const EventForm: FC<eventProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        author: '',
        data: '',
        description: '',
        guests: ''
    } as IEvent)

    const author = useTypedSelector(state => state.auth.user.username)
    const currentDate = new Date()

    const selectDate = (date: any) => {

        const day = getDay(date.toDate()) as number
        const year = getYear(date.toDate()) as number
        const mounth = getMounth(date.toDate()) as number

        if (date) {
            setEvent({ ...event, data: formatDate(date.toDate()) })
        }

        if(currentDate.getDate()>day||currentDate.getMonth()+1>mounth||currentDate.getFullYear()>year){
            alert('Нельзя выбрать дату в прошлом')
            setEvent({ ...event, data: '' })
        }
    }

    const submit = () => {
        setEvent({ ...event, author: author })
        console.log(event)
    }

    return (
        <Form
            // onFinish={submit}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        // onFinish={submit}
        >


            <Form.Item
                label="Описание"
                name="description"
                rules={[{ required: true, message: 'Пожалуйста введите описание!' }]}

            >
                <Input value={event.description} onChange={(e) => { setEvent({ ...event, description: e.target.value }) }} style={{ width: 180 }} />
            </Form.Item>

            <Form.Item
                label="Дата"
                name="date"
                rules={[{ required: true, message: 'Пожалуйста введите дату!' }]}

            >
                <DatePicker
                    onChange={(date) => selectDate(date)} style={{ width: 180 }} 
                    />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"

            >
                <Select
                    onChange={(guests: string) => { setEvent({ ...event, guests }) }}
                    style={{ width: 180 }}
                >
                    {props.guests.map(guest => (
                        <Select.Option key={guest.username} value={guest.username} >
                            {guest.username}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify='end'>
                    <Button style={{ marginLeft: 110 }} type="primary" htmlType="submit"  onClick={()=>props.submit({...event, author: author})}>
                        Добавить событие
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    )
}

export default EventForm