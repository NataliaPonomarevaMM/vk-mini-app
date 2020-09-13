import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { PanelHeaderBack } from '@vkontakte/vkui';
import { FormLayout, Input, Select, Textarea, Checkbox, Link} from '@vkontakte/vkui';

const Collection = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			separator={false}
			left={<PanelHeaderBack onClick={go} data-to="home" />}
		>
			Целевой сбор
		</PanelHeader>
		<FormLayout>
			<Input
				type="name"
				top="Название сбора"
				placeholder="Название сбора"
			/>

			<Input
				type="sum"
				top="Сумма, ₽"
				placeholder="Сколько нужно собрать?"
			/>

			<Input
				type="purpose"
				top="Цель"
				placeholder="Например, лечение человека"
			/>

			<Textarea
				top="Описание"
				placeholder="На что пойдут деньги и как они кому-то помогут?"
			/>

			<Select
				top="Куда получать деньги"
			>
				<option value="0">Счет VK Pay * 1234</option>
				<option value="1">Карта * 1337</option>
			</Select>

			<Button size="xl">Далее</Button>
		</FormLayout>
	</Panel>
);

Collection.propTypes = {
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

export default Collection;
