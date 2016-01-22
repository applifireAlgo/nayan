package com.test.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.test.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.test.app.server.repository.TalukaRepository;
import com.test.app.shared.location.Taluka;
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
import com.test.app.shared.location.Country;
import com.test.app.server.repository.CountryRepository;
import com.test.app.shared.location.District;
import com.test.app.server.repository.DistrictRepository;
import com.test.app.shared.location.Region;
import com.test.app.server.repository.RegionRepository;
import com.test.app.shared.location.State;
import com.test.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class TalukaTestCase {

    @Autowired
    private TalukaRepository<Taluka> talukaRepository;

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
            country.setCapital("49LKgWHLDHxWSqgGLVKXyuGabwUPF8ew");
            country.setCapitalLatitude(1);
            country.setCapitalLongitude(8);
            country.setCountryCode1("Qa3");
            country.setCountryCode2("0sD");
            country.setCountryFlag("8d2eMFj03PHS9tAF3eNjqjNxohyYoz9FLnl43sUL20Z6Meahfn");
            country.setCountryName("YWmZhYA81Y7rFAtzZGVqVwD8poZtUst7Ug1l6xBUwxroW6RirC");
            country.setCurrencyCode("i1B");
            country.setCurrencyName("3dNsgIHWKpLECHRWHlUkgfj9pXYvFiyC6jkPpmg9rHoVIi1vOP");
            country.setCurrencySymbol("M9aK0Y3GDKcRLybw14Bn4NVlebQ0jVMa");
            country.setIsoNumeric(3);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            District district = new District();
            district.setCode2("oCXWJdehNRi3MSotRahqoeaMRPl6Q33f");
            Region region = new Region();
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("l9HDt0tmfa3qnrCGQz5eAKrBbC1HqNK4Wb4HFnaFg3c4sWMoPb");
            state.setStateCapitalLatitude(8);
            state.setStateCapitalLongitude(1);
            state.setStateCode(2);
            state.setStateCodeChar2("NpgJdSmHzawOCm3jQEmL8InutjP2afJl");
            state.setStateCodeChar3("13x2zjOtjO9z1abw7naiGaEfyOWKEiiG");
            state.setStateDescription("kFlQgVRHVthDAYt4RiQczZiv5e8Q1zGgs61SbwEVxsVy6JoNQ9");
            state.setStateFlag("zxssZ0aoA4z1QlkR0mBcWHD0cdWvp9ADJ9stlmgwGytQdvaZej");
            state.setStateName("4v3RQPwnTsPepyEdO1BY29sbxQbX4MocHRd5f9nRkoGLDM76jG");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            region.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            region.setRegionCode1(1);
            region.setRegionCodeChar2("EBZK4Q1GgpNq1SrUAS8qumYOpgM4s5YY");
            region.setRegionDescription("uV0xn5EskUKT1kultMKsFNG3yX5DKXclaZIbmBZ2ei5Kz5GiiR");
            region.setRegionFlag("O4XlutV9Ao3dW54ANJgoxy7jK6skLaR5Cc0874bTKNtFKdL5hW");
            region.setRegionLatitude(1);
            region.setRegionLongitude(7);
            region.setRegionName("GLQ3jmoHnR5bJWaMN8b8upRxBcUyI0f1fsUzPsDSh2bXvNbXik");
            region.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            Region RegionTest = regionRepository.save(region);
            map.put("RegionPrimaryKey", region._getPrimarykey());
            district.setCode2("xwsgPN8PgFsHKm5F12UKm5SQrcrckFs9");
            district.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setDistrictDescription("yZXMz0R7qaJlNY3Ud3nl9yHoue8dlj2XuMrWNeHQhhCv4dTtpg");
            district.setDistrictFlag("rd3OfWOIcOUASKBFcFFeQR59u9RrwhudJtcR5OIjyQeA7iF91f");
            district.setDistrictLatitude(0);
            district.setDistrictLongitude(11);
            district.setName("G0HWOySFkuBeL6oZFNDE3AGQfvrYp7w7syKMFEHUhTKF6s0J4D");
            district.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            District DistrictTest = districtRepository.save(district);
            map.put("DistrictPrimaryKey", district._getPrimarykey());
            Taluka taluka = new Taluka();
            taluka.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setStateId((java.lang.String) StateTest._getPrimarykey());
            taluka.setTalukaCode("OaWCLiAhAFwbA1NlRwCqldI5rxOIhvkT");
            taluka.setTalukaDescription("KaNTQIv9PvnpLJbNNWQFC70JGxk60I0pHgcFD5DtBwXbgd8x2h");
            taluka.setTalukaFlag("9zGjfdV761bWvEIMJ08o6NimFCBlTf8iIKQqy1d7LvsEeWV9RQ");
            taluka.setTalukaLatitude(7);
            taluka.setTalukaLongitude(9);
            taluka.setTalukaName("OywR67fW9WevTrBoW4x7XNzBaRt4p60ZYxSrXG50mr3H6ZPIZj");
            taluka.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            taluka.setEntityValidator(entityValidator);
            taluka.isValid();
            talukaRepository.save(taluka);
            map.put("TalukaPrimaryKey", taluka._getPrimarykey());
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

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("TalukaPrimaryKey"));
            Taluka taluka = talukaRepository.findById((java.lang.String) map.get("TalukaPrimaryKey"));
            taluka.setTalukaCode("LQ1wLcOfTzznm7WG9VM1k6mtRaP4OaY2");
            taluka.setTalukaDescription("ExhrWukwWLcYx9ri626yk6iQ1MFWihXGBqUzCspurlVxiLChEY");
            taluka.setTalukaFlag("HwaaTClTrmpYXawyeq68fktTLYt23k9D1F2uSzHv1WVBVx0HHm");
            taluka.setTalukaLatitude(3);
            taluka.setTalukaLongitude(5);
            taluka.setTalukaName("EgO0TkT0v1yo1FYxZhjCcyr00lVZozoxy8lcXCm7QTq0fsdqDx");
            taluka.setVersionId(1);
            taluka.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            talukaRepository.update(taluka);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Taluka> listofcountryId = talukaRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
            java.util.List<Taluka> listofdistrictId = talukaRepository.findByDistrictId((java.lang.String) map.get("DistrictPrimaryKey"));
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
            java.util.List<Taluka> listofregionId = talukaRepository.findByRegionId((java.lang.String) map.get("RegionPrimaryKey"));
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
            java.util.List<Taluka> listofstateId = talukaRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
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
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("TalukaPrimaryKey"));
            talukaRepository.findById((java.lang.String) map.get("TalukaPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("TalukaPrimaryKey"));
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
