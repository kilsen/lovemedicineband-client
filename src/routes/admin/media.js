import {
  Datagrid,
  DateField,
  EditGuesser,
  Labeled,
  List,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
  useRecordContext
} from 'react-admin';
import React from "react";

export const list = () => (
  <List>
    <Datagrid>
      <DateField source="date" options={{timeZone: 'UTC'}}/>
      <TextField source="description"/>
      <UrlField source="video"/>
      {/*<DateField source="updatedAt" />*/}
      {/*<TextField source="id" />*/}
    </Datagrid>
  </List>
);

const MediaPhoto = () => {
  const record = useRecordContext();
  if (!record || !record.photo || !record.photo.data) return null;
  return <img src={process.env.REACT_APP_serverURL + `/api/v1/media/${record.id}/photo`} alt="img"
              style={{width: '80%'}}/>;
};

export const show = () => (
  <Show>
    <SimpleShowLayout>
      <DateField source="date" options={{timeZone: 'UTC'}}/>
      <TextField source="description"/>
      <UrlField source="video"/>
      <Labeled label={"Photo"}>
        <MediaPhoto/>
      </Labeled>
      <DateField source="updatedAt" showTime />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);

const media = {name: "Media", list, show, edit: EditGuesser};

export default media;
