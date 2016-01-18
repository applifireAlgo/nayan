package project4.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import project4.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import project4.app.server.repository.VillageRepository;
import project4.app.shared.location.Village;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import project4.app.shared.location.Country;
import project4.app.server.repository.CountryRepository;
import project4.app.shared.location.District;
import project4.app.server.repository.DistrictRepository;
import project4.app.shared.location.Region;
import project4.app.server.repository.RegionRepository;
import project4.app.shared.location.State;
import project4.app.server.repository.StateRepository;
import project4.app.shared.location.Taluka;
import project4.app.server.repository.TalukaRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class VillageTestCase {

    @Autowired
    private VillageRepository<Village> villageRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            Country country = new Country();
            country.setCapital("M92ZvxH4iIS9VAlPeb7tWPIQgjwRjU53");
            country.setCapitalLatitude(6);
            country.setCapitalLongitude(11);
            country.setCountryCode1("hB7");
            country.setCountryCode2("cxm");
            country.setCountryFlag("2tbeSEOKb1cscvfUFluFGy7qEy3egILs14zoRelI1pDAcXurzb");
            country.setCountryName("lSpoW1mtOuOcODdl9kCdoBAXZHP1KyIqD25C9NMoXWpeQJHMtc");
            country.setCurrencyCode("Vw6");
            country.setCurrencyName("OVZdWylFkH1ciXG5PHlgiKFx6qODXBLwkgmankTWGGm5W5XoqE");
            country.setCurrencySymbol("TfkHOEPzxWJUecX42YaPQsnGjIygv8sa");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            District district = new District();
            district.setCode2("kD5tk4y21CKWPpAuR1SuoJfVuLoOgOOk");
            Region region = new Region();
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("7tF4jksFBMhSpy1wGwdSLV5BgkVPa4x9fFdGjlXaMo2ThKZ4HQ");
            state.setStateCapitalLatitude(11);
            state.setStateCapitalLongitude(5);
            state.setStateCode(0);
            state.setStateCodeChar2("tAFuEo1cBtcS2IMryPPb9p4LkDzBcmyC");
            state.setStateCodeChar3("PflMR2ldTURqt78iXeoKemhn8aar358K");
            state.setStateDescription("HkbomQSuWpUwcqLZz2pNs2q96n9Wlu6B2mTww49ihxCGbziqsV");
            state.setStateFlag("YFITgkBLrPuTB6BA7QYoipGUrvh4xirVvSryiYcHaXEOG31VhO");
            state.setStateName("FEYFCtOaRRfqv9lWxKNoN0nwxqkzUugY9mjRHssL5S7oBa9CkT");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            region.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            region.setRegionCode1(1);
            region.setRegionCodeChar2("VqVO8cEnRxbw1HVf7wugo9ymzU0lQ9Yu");
            region.setRegionDescription("sCADjj47OuqbRMRbHkXGk7udYgK0ZMjTSB2ejv3Ksq5Oz0tff9");
            region.setRegionFlag("HZe0gsxH8smpwY6QMLZYlEOUf93y6t5bvq5YctlqENTiAEUSw7");
            region.setRegionLatitude(0);
            region.setRegionLongitude(9);
            region.setRegionName("3dxlZr8U73ky04g1N4iVSO9oQl03mp8g1EtzCyODtrax3ZFcgw");
            region.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            Region RegionTest = regionRepository.save(region);
            map.put("RegionPrimaryKey", region._getPrimarykey());
            district.setCode2("4ujQuYV5SxHtx1v9lt95YusMp9xxHpNR");
            district.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setDistrictDescription("R58DqW99g88HGoLAS7P0zXycgYQPnPO4Dc6rr0pV64tQ3Qdsgq");
            district.setDistrictFlag("b5rtq4OG6aQs1Z2Nq0yhFqSTZ0pHfj5MR4XXCRvPDSY4UtvmMm");
            district.setDistrictLatitude(1);
            district.setDistrictLongitude(8);
            district.setName("q6aieV2jtL0PaFBXDKKYFtTDdLNmcxUXkqpsQDwZiqj6tfeSdp");
            district.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            District DistrictTest = districtRepository.save(district);
            map.put("DistrictPrimaryKey", district._getPrimarykey());
            Taluka taluka = new Taluka();
            taluka.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setTalukaCode("Eh9xS8gAbt79k0c6ouGwxS9ROxnLFTAr");
            taluka.setTalukaDescription("rBFBzgu4GnsjlGKwgCcbTGJA5RP1QHjGR4ZjG4GowNQ5vp4UDK");
            taluka.setTalukaFlag("rAlyrCYip5fOuk19KcPugICWGM0oUMwWfDSGwGuNw0cSojNZz1");
            taluka.setTalukaLatitude(2);
            taluka.setTalukaLongitude(4);
            taluka.setTalukaName("lzCt1auagAgscbwUIIoIBbIMa8HhjK0tm2cFrSAM32pAmW8Ka4");
            Taluka TalukaTest = talukaRepository.save(taluka);
            map.put("TalukaPrimaryKey", taluka._getPrimarykey());
            Village village = new Village();
            village.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setTalukaaId((java.lang.String) TalukaTest._getPrimarykey());
            village.setVillageCode("DpNJTFJFndqxMcsLp1LJqq6lLQ3PZtKJ");
            village.setVillageDescription("kF0XO6g9WG8CYULqzTqRmJZnUqd9TjD81b2fS9M4s8CKyu73ao");
            village.setVillageFlag("vNs6aVN6R4bpDXNzSuMhEjrAFodMjtvSNNU6kp4HVSgk14umUd");
            village.setVillageLatitude("5AUmgMp8cP7");
            village.setVillageLongtitude(7);
            village.setVillageName("vkTNGAMvZh9j2Ka8MA4Fq7T1ZMlpmlGHVLJ59cegsDHVF61shQ");
            village.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            village.setEntityValidator(entityValidator);
            village.isValid();
            villageRepository.save(village);
            map.put("VillagePrimaryKey", village._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private DistrictRepository<District> districtRepository;

    @Autowired
    private RegionRepository<Region> regionRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private TalukaRepository<Taluka> talukaRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("VillagePrimaryKey"));
            Village village = villageRepository.findById((java.lang.String) map.get("VillagePrimaryKey"));
            village.setVersionId(1);
            village.setVillageCode("90gGeHztlQHpRLfk2Q4YuKIEU7ckynTE");
            village.setVillageDescription("VrkfUEL3dTaFpDaK4BNZhMmia0lbLChqGHw0e2Do7rRDAIxSnR");
            village.setVillageFlag("hQX1hSwUoUk9WiSnmJflnLh15GZSyhJR1x8jHeXYs6mPa01cDu");
            village.setVillageLatitude("GgmoVymLjgx");
            village.setVillageLongtitude(1);
            village.setVillageName("7mLBXhuMEBRanXmJ9tN6i0nwnHy7BBhyroueA6pcwiPJ5CeWOY");
            village.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            villageRepository.update(village);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Village> listofcountryId = villageRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBydistrictId() {
        try {
            java.util.List<Village> listofdistrictId = villageRepository.findByDistrictId((java.lang.String) map.get("DistrictPrimaryKey"));
            if (listofdistrictId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByregionId() {
        try {
            java.util.List<Village> listofregionId = villageRepository.findByRegionId((java.lang.String) map.get("RegionPrimaryKey"));
            if (listofregionId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<Village> listofstateId = villageRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytalukaaId() {
        try {
            java.util.List<Village> listoftalukaaId = villageRepository.findByTalukaaId((java.lang.String) map.get("TalukaPrimaryKey"));
            if (listoftalukaaId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("VillagePrimaryKey"));
            villageRepository.findById((java.lang.String) map.get("VillagePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("VillagePrimaryKey"));
            villageRepository.delete((java.lang.String) map.get("VillagePrimaryKey")); /* Deleting refrenced data */
            talukaRepository.delete((java.lang.String) map.get("TalukaPrimaryKey")); /* Deleting refrenced data */
            districtRepository.delete((java.lang.String) map.get("DistrictPrimaryKey")); /* Deleting refrenced data */
            regionRepository.delete((java.lang.String) map.get("RegionPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
