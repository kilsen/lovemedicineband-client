import {
  Datagrid,
  DateField,
  DateInput,
  DateTimeInput,
  Edit,
  ImageField,
  Labeled,
  List,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  UrlField,
  useRecordContext
} from 'react-admin';

const list = () => (
  <List>
    <Datagrid>
      <DateField source="date" options={{timeZone: 'UTC'}}/>
      <DateField source="startTime" showTime showDate={false} options={{timeStyle: 'short', timeZone: 'UTC'}}/>
      <DateField source="endTime" showTime showDate={false} options={{timeStyle: 'short', timeZone: 'UTC'}}/>
      <TextField source="venue"/>
      <TextField source="description"/>
      <UrlField source="URL"/>
      {/*<TextField source="address" />*/}
      {/*<DateField source="updatedAt" />*/}
      {/*<TextField source="id" />*/}
    </Datagrid>
  </List>
);

const ShowPhoto = () => {
  const record = useRecordContext();
  if (!record || !record.photo || !record.photo.data) return null;
  return <img src={process.env.REACT_APP_serverURL + `/api/v1/shows/${record._id}/photo`} alt="img"
              style={{width: '80%'}}/>;
};

const show = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <DateField source="date" options={{timeZone: 'UTC'}}/>
        <DateField source="startTime" showTime showDate={false} options={{timeStyle: 'short', timeZone: 'UTC'}}/>
        <DateField source="endTime" showTime showDate={false} options={{timeStyle: 'short', timeZone: 'UTC'}}/>
        <TextField source="venue"/>
        <TextField source="description"/>
        <UrlField source="URL"/>
        <TextField source="address"/>
        <Labeled label={"Photo"}>
          <ShowPhoto/>
        </Labeled>
        <DateField source="updatedAt" showTime/>
        <TextField source="id"/>
      </SimpleShowLayout>
    </Show>
  );
};

const saveDateAsUTC = (date) => {
  if (!date) return null;
  return date + "T00:00:00.000+0000";
};

const displayDateAsUTC = (date) => {
  if (!date) return null;
  return date.substring(0, 10);
};

const saveDateTimeAsUTC = (date) => {
  if (!date) return null;
  return (date + "+0000");
};

const displayDateTimeAsUTC = (date) => {
  if (!date) return null;
  return date.substring(0,23);
}

const edit = () => (
  <Edit>
    <SimpleForm>
      <DateInput source="date" parse={saveDateAsUTC} format={displayDateAsUTC}/>
      <DateTimeInput source="startTime" parse={saveDateTimeAsUTC} format={displayDateTimeAsUTC}/>
      <DateTimeInput source="endTime" parse={saveDateTimeAsUTC} format={displayDateTimeAsUTC}/>
      <TextInput source="venue"/>
      <TextInput source="description"/>
      <TextInput source="URL"/>
      <TextInput source="address"/>
    </SimpleForm>
  </Edit>
);

const shows = {name: "Shows", list, show, edit};

export default shows;
