package com.test.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.test.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.test.app.server.repository.VillageRepository;
import com.test.app.shared.location.Village;
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
import com.test.app.shared.location.Taluka;
import com.test.app.server.repository.TalukaRepository;

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
            country.setCapital("GRzZxIejbNdncueSfdVuDp13cAxQdREf");
            country.setCapitalLatitude(10);
            country.setCapitalLongitude(9);
            country.setCountryCode1("iUr");
            country.setCountryCode2("kA4");
            country.setCountryFlag("L4AGAhdhGZw0ap4XUZEcyYmjqeSCshZrJRrGiyDwcdLTrzifSo");
            country.setCountryName("luMWhBprR2nWMqyVwGGluCOnZ3DmWiFT6xAgc5PLlLnrhCwPT2");
            country.setCurrencyCode("1jV");
            country.setCurrencyName("7skOtx178PxXdE5XOmCWHX4K1yrTVyNBFW9PkPMU5Gh4Cpwxpw");
            country.setCurrencySymbol("X5NTKkROwJScLYeIH6hLRse7We9xfwWP");
            country.setIsoNumeric(10);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            District district = new District();
            district.setCode2("Do4APamJN2Zugyhaq7ayyMIkiqj0VTzs");
            Region region = new Region();
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("0KpoQsLzKqEUeCcNAJO8FgXmfTWRLdCDDGRBwv7kelZuGlNDkn");
            state.setStateCapitalLatitude(4);
            state.setStateCapitalLongitude(9);
            state.setStateCode(2);
            state.setStateCodeChar2("cTh3brAKbJaqUWv7TjfqBtS9y4Xh87nj");
            state.setStateCodeChar3("kWaDGoTtdgtkBjXYB2NLnadmd9OXhk8K");
            state.setStateDescription("szxR1Jw0ps4Z23baINNKYDjLsxTmS97ApzztfqFcv2u4KLTZAH");
            state.setStateFlag("gXTPsbWDvFZ9cLYgeWIwg0PiRWv5B9QWpzSynhwffy0jnLXHti");
            state.setStateName("82c2JdYZXKpTI9BkCNlWkowH5GIlwk971tNOWnLdPG4Jam7xmU");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            region.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            region.setRegionCode1(2);
            region.setRegionCodeChar2("nBuc8RObvEDiSRD0qHqy2Zb7nmViMRsi");
            region.setRegionDescription("TG8CwincrPr897td4OzyKdnx6MyGOBBWtVKMLAu6zcMJDLdlfZ");
            region.setRegionFlag("VpXhDMDrSWS2zt4WspRWa42nek4juzQkZelitbnLv6zGRkapdJ");
            region.setRegionLatitude(1);
            region.setRegionLongitude(10);
            region.setRegionName("tMfEWeLwe4qsBLswbf0DVYkrGLBZR2Y4hrLS7JvjP2lCwvmeeZ");
            region.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            Region RegionTest = regionRepository.save(region);
            map.put("RegionPrimaryKey", region._getPrimarykey());
            district.setCode2("YIkc3enJ6Yaagw207gS3z1iEykzdqCU0");
            district.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setDistrictDescription("BeOmNLfpyPJNtXn8rt9f68bHvLHZyVl9IeB7gdL3Hk6bl3nX6w");
            district.setDistrictFlag("YkVd4mpqiHexD6Wze0IQhiW8hvFU4xDK8jDtAjkdpeAzVl51hc");
            district.setDistrictLatitude(3);
            district.setDistrictLongitude(11);
            district.setName("uTfF9pWNRYF72U3VAcZsVCua3DHxP30XwihiIbrEcGMOMSahKs");
            district.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            District DistrictTest = districtRepository.save(district);
            map.put("DistrictPrimaryKey", district._getPrimarykey());
            Taluka taluka = new Taluka();
            taluka.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            taluka.setTalukaCode("YnayF7afKujWX0jcBjOMtWEVQZLMqlMg");
            taluka.setTalukaDescription("NiMnKdPbzGkPyshySsF2XoZsJO0xgoh9sTOvqDufTfUSNsumEx");
            taluka.setTalukaFlag("6HxtDDD3YyOPkawLLOsfgHsd3cdywGwS5jY8WcIEkJr94Innv6");
            taluka.setTalukaLatitude(11);
            taluka.setTalukaLongitude(5);
            taluka.setTalukaName("Be6kWxgfWKGWRNCwL7LMS1bEbmSQcrCrQXI8p8T0jFoJ37qwrv");
            Taluka TalukaTest = talukaRepository.save(taluka);
            map.put("TalukaPrimaryKey", taluka._getPrimarykey());
            Village village = new Village();
            village.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setDistrictId((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            village.setTalukaaId((java.lang.String) TalukaTest._getPrimarykey());
            village.setVillageCode("3qbR49xu8bgh1VtWjA6KoWXOXDBnZ9pF");
            village.setVillageDescription("2dMdgouEMyBVk0NkT4VWkHaWWjqvjJCpS0BfUbXYXMxOE8dKr9");
            village.setVillageFlag("6QDbXVsnifBkBmSCih2IJJe0Tv5Oaqwh50Jgg3KgEVtI40WOiE");
            village.setVillageLatitude("ctn0ULdMLKb");
            village.setVillageLongtitude(7);
            village.setVillageName("uLVwHEWNJUq0Mr0YVQS2MSsOvnIdT3NERyN2XMmdXqsJPlGcx2");
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
            village.setVillageCode("2I5OPI3OmfTUx2YkmvdwbHYPVIumps4A");
            village.setVillageDescription("5h0EGiwSZrEbp2bi7DFzTP3Cii7DCfC8zJjmY13RU3ULD7TwJ4");
            village.setVillageFlag("dr9X8OmVxdhTsoUbeRzOt8rNdrgyId1EWmLjKygMzQN5PEVZhV");
            village.setVillageLatitude("ISiePOTOHBN");
            village.setVillageLongtitude(5);
            village.setVillageName("MysjCmenQ5TzoH5QOEsI8s1ySGUGuynFH5ukLydQt2cjVXDjCA");
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
