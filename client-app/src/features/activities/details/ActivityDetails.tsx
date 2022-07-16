import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";
import { useStore } from "../../../app/stores/store";

interface Props {
	activity: Activity;
}

export default function ActivityDetails({ activity }: Props) {
	const {activityStore} = useStore();
	
	
	return (
		<Card fluid>
			<Image src={`/assets/categoryImages/${activity.category}.jpg`} />
			<Card.Content>
				<Card.Header>{activity.title}</Card.Header>
				<Card.Meta>
					<span >{activity.date}</span>
				</Card.Meta>
				<Card.Description>
					{activity.description}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button.Group widths='2'>
					<Button onClick={() => activityStore.openForm(activity.id)} color="blue" content='Edit' />
					<Button onClick={activityStore.cancelSelectedActivity} color="grey" content='Cancel' />
				</Button.Group>
			</Card.Content>
		</Card>
	)
}