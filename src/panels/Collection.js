import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { PanelHeaderBack } from '@vkontakte/vkui';
import { FormLayout, FormLayoutGroup, Input, Select, Textarea, Checkbox, Link} from '@vkontakte/vkui';


import './Home.css'

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
				type="email"
				top="E-mail"
				name="email"
				value={""}
				onChange={""}
				status={"email" ? 'valid' : 'error'}
				bottom={"email" ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
			/>

			<FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
				<Input type="password"  placeholder="Введите пароль" />
				<Input type="password" placeholder="Повторите пароль" />
			</FormLayoutGroup>

			<Input top="Имя" />
			<Input top="Фамилия" />

			<Select top="Пол" placeholder="Выберите пол">
				<option value="m">Мужской</option>
				<option value="f">Женский</option>
			</Select>

			<Select
				top="Цель поездки"
				placeholder="Выберите цель поездки"
			>
				<option value="0">Бизнес или работа</option>
				<option value="1">Индивидуальный туризм</option>
				<option value="2">Посещение близких родственников</option>
			</Select>

			<Textarea top="О себе" />

			<Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
			<Button size="xl">Зарегистрироваться</Button>
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
