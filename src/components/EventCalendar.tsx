import React, { FC } from "react";
import { Calendar, Layout } from 'antd';
import { IEvent } from "../models/IEvent";
import { formatDate } from "../utils/date";
import { Moment } from "moment";

interface calendarProps {
    eventsProps: IEvent[]
}

const EventCalendar: FC<calendarProps> = (props) => {
   
    function dateCellRender(value: any) {
        const formatedDate = formatDate(value.toDate());
        const currentDayEvents = props.eventsProps.filter(ev => ev.data === formatedDate);
        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    }

    return (
        <Calendar dateCellRender={dateCellRender}/>
    )
}

export default EventCalendar