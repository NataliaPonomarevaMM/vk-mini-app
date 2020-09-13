import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

import './Home.css'
import {FixedLayout} from "@vkontakte/vkui";

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>
		<Placeholder
			action={<Button size="l">Создать сбор</Button>}
			stretched
		>
			    У вас пока нет сборов. <br />
				Начните доброе дело.
		</Placeholder>
				{/*<Div className="Text">У вас пока нет сборов.</Div>*/}
				{/*<Text className="Text">Начните доброе дело.</Text>*/}
				{/*<Div className="Button">*/}
				{/*	<Button className="Button2">*/}
				{/*		Hello*/}
				{/*	</Button>*/}
				{/*</Div>*/}
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
