import React, { useEffect } from 'react';
import * as S from './Dashboard.style';

import { useSelector, useDispatch } from 'react-redux';
import {
  getData,
  selectData,
  selectStatus,
  selectIsLoaded,
} from '../../store/covid';

// import Header from '../Header/Header';
import MapChart from '../MapChart/MapChart';
import CountryHeading from '../CountryHeading/CountryHeading';
import StatBox from '../StatBox/StatBox';
import SearchBar from '../SearchBar/SearchBar';
import Provinces from '../Provinces/Provinces';

import {
  faHospital,
  faHeadSideCough,
  faUser,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const dispatch = useDispatch();
  const covidData = useSelector(selectData);
  const status = useSelector(selectStatus);
  const isLoaded = useSelector(selectIsLoaded);

  useEffect(() => {
    //
    async function parseData() {
      dispatch(getData());
    }
    parseData();
  }, []);

  if (status === 'loading') {
    return (
      <div>
        <S.PageWrapper>Loading</S.PageWrapper>
      </div>
    );
  }
  return (
    <div>
      <S.PageWrapper>
        {isLoaded && (
          <>
            {/* Enable header when logo and login section is ready */}
            {/* <Header /> */}
            <SearchBar />
            <CountryHeading />
            <MapChart data={covidData} secondary />
            <S.StatBoxesContainer>
              <StatBox
                title="Confirmed"
                stat="confirmed"
                primary
                icon={faClipboardCheck}
              ></StatBox>
              <StatBox
                title="Recovered"
                stat="recovered"
                primary
                icon={faUser}
              ></StatBox>
              <StatBox
                title="Active"
                stat="active"
                secondary
                icon={faHeadSideCough}
              ></StatBox>
              <StatBox
                title="Deaths"
                stat="deaths"
                secondary
                icon={faHospital}
              ></StatBox>
            </S.StatBoxesContainer>
            <Provinces />
          </>
        )}
      </S.PageWrapper>
    </div>
  );
}

export default Dashboard;
