import {Admin, Resource} from 'react-admin';
import {authProvider, dataProvider} from './providers';
import shows from './shows';
import media from './media';

const AdminHome = () => (
  <section id={'team'}>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-sm-12 padding_all"}>
          <Admin
            basename="/admin"
            dataProvider={dataProvider}
            authProvider={authProvider}
            disableTelemetry
          >
            <Resource {...shows}/>
            <Resource {...media}/>
          </Admin>
        </div>
      </div>
    </div>
  </section>
);

export default AdminHome;
