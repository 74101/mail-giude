import {Notice} from "./Notice.jsx";

export const ThunderbirdCorp = () => {
	return (
		<>
			<h1 className="sticky top-0 -mx-5 -my-4 px-5 py-4 text-3xl font-bold mb-2 bg-neutral-800/80">Mozilla Thunderbird (Corp.uz)</h1>
			<ol className="list-decimal pl-6 text-lg">
				<li className="mb-6">
					<p className="mb-2">Нажмите "Настройки" (шестерёнка в нижнем левом углу)</p>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_start.jpg" alt="Нажмите 'Настройки'"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Нажмите "Параметры учетной записи".</p>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_2.jpg" alt="Параметры учетной записи"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Нажмите "Действия для учетной записи". А затем "Добавить учетную запись почты...".</p>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_3.jpg" alt="Параметры учетной записи"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Введите имя, адрес электронной почты и пароль. Для ручной настройки нажмите "Настроить вручную".</p>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_4_manual.jpg" alt="адрес электронной почты"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">Выберите тип протокола POP3 или IMAP. И введите настройки почтовых серверов как на скриншоте. Затем нажмите </p>
					<Notice>
						Основное различие между учетными записями POP3 и IMAP заключается в способе хранения и доступа к сообщениям.
						POP3 загружает email-сообщения на компьютер или устройство пользователя,
						IMAP позволяет получать доступ к сообщениям непосредственно на сервере электронной почты.
					</Notice>
					<h3 className="mb-2">Для IMAP:</h3>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_imap_server_set.jpg" alt="тип протокола IMAP"/>
					<h3 className="mb-2 mt-4">Для POP3:</h3>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_pop_server_set.jpg" alt="тип протокола POP3"/>
				</li>
				<li className="mb-6">
					<p className="mb-2">После тестирования нажмите готово. Учетная запись успешно добавлена!</p>
					<h3 className="mb-2">Для IMAP:</h3>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_imap_server_test.jpg" alt="IMAP успешно добавлена"/>
					<h3 className="mb-2 mt-4">Для POP3:</h3>
					<img className="rounded-lg overflow-hidden shadow-lg shadow-emerald-800/20" src="/images/tunder_corp/thunderbird_pop_server_done.jpg" alt="POP3 успешно добавлена"/>
				</li>
			</ol>
		</>
	)
}