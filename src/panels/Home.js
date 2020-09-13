import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>
		<Placeholder
			action={<Button size="l" onClick={go} data-to="ctype">Создать сбор</Button>}
			stretched
		>
			    У вас пока нет сборов. <br />
				Начните доброе дело.
		</Placeholder>
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
