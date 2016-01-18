package project4.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import project4.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import project4.app.server.repository.AddressRepository;
import project4.app.shared.location.Address;
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
import project4.app.shared.location.AddressType;
import project4.app.server.repository.AddressTypeRepository;
import project4.app.shared.location.City;
import project4.app.server.repository.CityRepository;
import project4.app.shared.location.Country;
import project4.app.server.repository.CountryRepository;
import project4.app.shared.location.State;
import project4.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AddressTestCase {

    @Autowired
    private AddressRepository<Address> addressRepository;

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
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("Isq14pyD8rTiaFpqgrbi5NwhAylv3n0n5Xi8Rq1XOPIpXlRijg");
            addresstype.setAddressTypeDesc("TyCSZpHiElgLlX6uO456haxH3iAlZrf4wjWXQwLaCbjMngOXXI");
            addresstype.setAddressTypeIcon("aKJLtJouFDjSYNntv7ouPO7yOuYSfgu1Cb7msxRFBgmFWFePVs");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(2);
            city.setCityCodeChar2("VJj8Ts5jQOlZ7cEJE0HTfAdJUil5KuEs");
            city.setCityDescription("zYtdYYefkxlNZNl5hKZ2cctsmd9LLmDEZVSBjz5o60vo4HayBo");
            city.setCityFlag("Edn7GCb07HspBxxKHjXIfwkMwANLbm5SfikaGkyzLB5Wuac0Ml");
            city.setCityLatitude(3);
            city.setCityLongitude(3);
            city.setCityName("cYIbtxi4eDKy2v0HxMrIE5X8dhyOsmFhFRtJbop2ssoZp4f6Za");
            Country country = new Country();
            country.setCapital("7vT9oikf72iS7ZptH96OJkot9PKE9R80");
            country.setCapitalLatitude(6);
            country.setCapitalLongitude(10);
            country.setCountryCode1("GTZ");
            country.setCountryCode2("U3w");
            country.setCountryFlag("5vp9iiFFBZvGmbWS9sCqIIwRCe9JH5asOYAilVitdd9T7xGzeW");
            country.setCountryName("DsfhzDXtU7fC9scGYtrBF4yxlerSUSh7s0CpII8dO2bbRHZv5C");
            country.setCurrencyCode("HNx");
            country.setCurrencyName("iBvYoaz5Nrp1XxDT22B9oinBRZLtjVM9rfYwQexO7jfNJd3nQX");
            country.setCurrencySymbol("nDEdOEgUHZmURKTXwUM1EFu3fq72qRtz");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("Zn0cKLM3uMkBaHg6NgTXNhmX5ngr2AzhVfdMiDBdskjmHPvAqn");
            state.setStateCapitalLatitude(3);
            state.setStateCapitalLongitude(11);
            state.setStateCode(1);
            state.setStateCodeChar2("TfPMhMm0XNQUTxxRy77JdGHWM4dbk740");
            state.setStateCodeChar3("WwUhuEqFHWpeWOEFlEYaEuhS4DdmPPMD");
            state.setStateDescription("TjVetu9jo0HbGYaebew7JQyR0Ue9CcJjPkVIXYOIzghgfbFBH5");
            state.setStateFlag("71cVx3zG7bTmsL0tgqXUiPDt213QCsKFknFBzhBrUBSNKxArZn");
            state.setStateName("gfGrJFh4EhYhlLKzHYXDFX8glioDR2vBpc80YHmQbXloPy9cD4");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(3);
            city.setCityCodeChar2("SpCs5GCr5neEH6kYvgXzsynye5tlfZKJ");
            city.setCityDescription("wyRcajCBjDul6GcFIXqKI6J2aPzn5p5mS5hJnmbhs7dD0xPM14");
            city.setCityFlag("Dj9DCU4Eku9GB6Qz5nurrYdg0Ai7KYcTWdRs2YPsBf3XUfyjvP");
            city.setCityLatitude(0);
            city.setCityLongitude(11);
            city.setCityName("Mo89sDS9xobA0PZKNGxdsuu80o0crewVDqEd6rKmXTgw6PHW39");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            Address address = new Address();
            address.setAddress1("oHD8FJ6xW98tidSLqLZVoqkiJaHLDI4RGDrlEhRtwCSKI8ggkw");
            address.setAddress2("Y3GH6mSREfgWHKvbdoVD44y3Igek2MuS6GC5O9DHecqohDlVY5");
            address.setAddress3("0zfUz2kpid1sne7p7wjmYKIQYueXvlWwAjd2bxPq9iESJm258N");
            address.setAddressLabel("nAYf9pUmqLF");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("b7WjyEfnoMu9ICeFvIyYG6YvshHIlelkv39Cgs6akxWDblkmCv");
            address.setLongitude("iaK3Rm8FNMnOGJDDByfUUuAEBKVbrqDjZJK00tYXmulk8BEfTK");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("mRyjYl");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            address.setEntityValidator(entityValidator);
            address.isValid();
            addressRepository.save(address);
            map.put("AddressPrimaryKey", address._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            Address address = addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
            address.setAddress1("JlbCjnrYiKzYEVEvxD9LD0pjZUhZ0pfOgYQ0GbbakgOipaeIQa");
            address.setAddress2("11QZdZgXz1x5DyPuGCnfO7ZNBi4oIzqfYgXA4LDuxM3CGZrnv3");
            address.setAddress3("AuIVycDsARRw9TnVupopczDXgn1WQQA0hYjVkVnVAbREBMNsVX");
            address.setAddressLabel("Tivhe9eBIt2");
            address.setLatitude("s8RyfzVcbN3Lk65YgIXsNv2DehZ0GElefQJX03Un5QbtGT5sBn");
            address.setLongitude("APBrgCaiCkOnouQECNgQ0ARF3RMau8DRTYRikVWSrDDfAtd3BS");
            address.setVersionId(1);
            address.setZipcode("OzIA5q");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            addressRepository.update(address);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByaddressTypeId() {
        try {
            java.util.List<Address> listofaddressTypeId = addressRepository.findByAddressTypeId((java.lang.String) map.get("AddressTypePrimaryKey"));
            if (listofaddressTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycityId() {
        try {
            java.util.List<Address> listofcityId = addressRepository.findByCityId((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcityId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Address> listofcountryId = addressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
    public void test3findBystateId() {
        try {
            java.util.List<Address> listofstateId = addressRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
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
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.delete((java.lang.String) map.get("AddressPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
