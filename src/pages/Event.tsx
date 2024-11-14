import React, { FC } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { Button, Modal, Layout, Row } from 'antd';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EventActionCreators } from "../store/reducers/event/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";


const Event: FC = () => {

    const data = useTypedSelector(state =>state.event.guests)
    const events = useTypedSelector(state=>state.event.events)
    const user = useTypedSelector(state =>state.auth.user)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(EventActionCreators.fetchGuests())
        dispatch(EventActionCreators.fetchEvents(user.username))
    },[])

    const [isOpen, setIsOpen] = useState(false)

    const submitFunction=(props: IEvent)=>{
        setIsOpen(false)
        dispatch(EventActionCreators.createEvent(props))
    }

    return (
        <Layout>
            <Row justify='center' style={{ backgroundColor: "white" }}>
                <h1>Календарь событий</h1>
            </Row>
            
            <EventCalendar eventsProps={events}/>

            <Row justify='end' style={{ backgroundColor: "white" }}>
                <Button onClick={() => setIsOpen(!isOpen)}>Дбавить событие</Button>
            </Row>

            <Modal title='Добавление события' open={isOpen} onCancel={() => setIsOpen(!isOpen)} footer={null}>
                <EventForm guests={data} submit={submitFunction}/>
            </Modal>
        </Layout>
    )
}

export default Event;