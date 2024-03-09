import Form from "./form"
import event from "./../../data/data.json"

export default function eventPage() {
    return (
        <>
        <div id="invite">
            <h1>You're invited to {event.name}</h1>
            <h2>The event is on {event.date} and will be held at {event.venue}</h2>
        </div>
        <Form/>
        </>
    );
}